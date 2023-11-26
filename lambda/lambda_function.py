from predictor import Predictor
from utils import InvalidValueError, make_response, parse_event_for_features


_FEATURE_COLUMNS = ["highBP", "highChol"]
_PATH_TO_MODEL = ""  # TODO: Pass where the model is located


def lambda_handler(event, context):
    features = []
    try:
        features = parse_event_for_features(event, _FEATURE_COLUMNS)
    except InvalidValueError as ex:
        print(ex)
        return make_response(400, {"message": str(ex)})
    except Exception as ex:
        print(ex)
        payload = {"message": "failed to read input features"}
        return make_response(500, payload)

    predictor = Predictor(_PATH_TO_MODEL)
    has_diabetes = predictor.predict(features)

    response = {"hasDiabetes": has_diabetes}
    return make_response(200, response)
