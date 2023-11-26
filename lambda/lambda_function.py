from random import random

from utils import InvalidValueError, make_response, parse_event_for_features

_FEATURE_COLUMNS = ["highBP", "highChol"]


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

    # TODO: Load ML Model from S3
    print(features)

    # TODO: Infer model using given input features
    has_diabetes = random() < 0.5

    response = {"hasDiabetes": has_diabetes}
    return make_response(200, response)
