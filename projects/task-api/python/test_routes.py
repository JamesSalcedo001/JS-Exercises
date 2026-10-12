"""Run python -m unittest test_routes.py; no test packages are needed."""
import copy
import json
from pathlib import Path
import unittest
from routes import handle_request

class RouteTests(unittest.TestCase):
    def test_contract(self):
        cases = json.loads((Path(__file__).resolve().parents[1] / "cases.json").read_text())
        for case in cases:
            with self.subTest(method=case["args"][0], path=case["args"][1], body=case["args"][2]):
                args = copy.deepcopy(case["args"])
                self.assertEqual(handle_request(*args), case["expected"])
                self.assertEqual(args, case["args"], "Input records changed")

if __name__ == "__main__":
    unittest.main()
