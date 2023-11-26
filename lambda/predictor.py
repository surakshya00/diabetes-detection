import random


class Predictor:
    def __init__(self, model_path):
        self.model_path = model_path
        self.model = self._get_latest_model()

    def _get_latest_model(self):
        # TODO: Read model from S3/Layer
        return {}

    def refresh_model(self):
        self.model = self._get_latest_model()

    def predict(self, features) -> bool:
        # TODO: Infer model using features
        return random.random() < 0.5
