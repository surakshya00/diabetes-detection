import pickle
import numpy as np
from sklearn.linear_model._base import LinearModel


class Predictor:
    def __init__(self, model_path):
        self.model_path = model_path
        self.model = self._get_latest_model()

    def _get_latest_model(self) -> LinearModel:
        with open(self.model_path, "rb") as fp:
            return pickle.load(fp)

    def refresh_model(self):
        self.model = self._get_latest_model()

    def predict(self, features) -> bool:
        result = self.model.predict(np.array([features]))
        return bool(result[0] == 1)


if __name__ == "__main__":
    import random

    predictor = Predictor("diabetes-detector.pkl")
    sample_features = [random.choice([0, 1]) for _ in range(21)]
    has_diabetes = predictor.predict(sample_features)
    print(has_diabetes)
