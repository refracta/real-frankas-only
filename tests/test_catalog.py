import copy
import json
import re
import unittest

from scripts.build_site import ROOT, MD, check_readme_statistics, parse_catalog


class CatalogTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = (ROOT / "data/papers.md").read_text()
        cls.overrides = json.loads((ROOT / "data/filter-overrides.json").read_text())
        cls.catalog = parse_catalog(cls.source, cls.overrides)
        cls.papers = {p["id"]: p for p in cls.catalog["papers"]}
        cls.readme = (ROOT / "README.md").read_text()

    def test_readme_statistics_match_published_data(self):
        check_readme_statistics(self.readme, self.catalog)

    def test_stale_statistics_fail_the_build(self):
        stale = re.sub(r"(\| \*\*4\*\* \| )(\d+)",
                       lambda match: match[1] + str(int(match[2]) + 1), self.readme, count=1)
        with self.assertRaises(ValueError):
            check_readme_statistics(stale, self.catalog)

    def test_mixed_scores_are_not_paper_wide_maxima(self):
        self.assertEqual(self.papers["action-space-study-2024"]["scores"], [3, 1])
        self.assertEqual(self.papers["context-aware-policies-2026"]["scores"], [2, 1])
        self.assertEqual(self.papers["action-space-study-2024"]["scoreGroup"], "Multiple")
        self.assertEqual(self.papers["industreal-2023"]["scores"], [])
        self.assertEqual(self.papers["deguv-2025"]["scores"], [0])

    def test_training_engine_is_not_evaluation_or_rendering_engine(self):
        expected = {"graspldm-2024": "NVIDIA FleX", "resip-2025": "Isaac Gym",
                    "crest-2021": "Custom task simulator", "dropo-2023": "Not established for the reviewed task",
                    "rebot-2025": "Isaac Lab", "forge-2025": "Isaac Gym"}
        for paper, group in expected.items():
            with self.subTest(paper=paper):
                self.assertEqual(self.papers[paper]["simulatorGroup"], group)

    def test_arm_identity_does_not_come_from_gripper(self):
        self.assertEqual(self.papers["qd-grasp-6dof-2024"]["models"], ["FR3"])
        self.assertEqual(self.papers["gcs-tactile-transfer-2026"]["models"], ["Not reported"])
        self.assertEqual(self.papers["rialto-2024"]["models"], ["Panda", "FR3"])
        self.assertEqual(self.papers["intervengen-2024"]["models"], ["Conflicting / ambiguous"])

    def test_limited_release_labels_are_preserved(self):
        self.assertIn("website only", self.papers["neuraltouch-2026"]["codeHtml"])
        self.assertIn("404", self.papers["hamnet-2025"]["codeHtml"])
        self.assertIn("Coming soon", self.papers["rfs-2026"]["codeHtml"])

    def test_duplicate_paper_is_rejected(self):
        first_row = next(line for line in self.source.splitlines() if line.startswith("| [AutoMate]"))
        with self.assertRaises(ValueError):
            parse_catalog(self.source.replace(first_row, first_row + "\n" + first_row), self.overrides)

    def test_orphan_review_is_rejected(self):
        first_row = next(line for line in self.source.splitlines() if line.startswith("| [AutoMate]"))
        with self.assertRaises(ValueError):
            parse_catalog(self.source.replace(first_row + "\n", ""), self.overrides)

    def test_stale_override_is_rejected(self):
        overrides = copy.deepcopy(self.overrides)
        overrides["models"]["missing-paper"] = ["Panda"]
        with self.assertRaises(ValueError):
            parse_catalog(self.source, overrides)

    def test_markdown_cannot_inject_script_or_unsafe_links(self):
        rendered = MD.render('<script>alert(1)</script>\n\n[unsafe](javascript:alert(1))')
        self.assertNotIn("<script>", rendered)
        self.assertNotIn('href="javascript:', rendered)


if __name__ == "__main__":
    unittest.main()
