import json


class InvalidValueError(Exception):
    pass


def parse_event_for_features(event, required_columns):
    request_body = {}
    try:
        request_body = json.loads(event["body"])
    except Exception as ex:
        print(ex)
        raise InvalidValueError("provide a valid JSON file in request body") from ex

    # Validate request body to get features
    features = []
    for column in required_columns:
        if column not in request_body:
            raise InvalidValueError(f"'{column}' must be provided")
        if not isinstance(request_body[column], int):
            raise InvalidValueError(f"'{column}' must be a valid integer")
        features.append(request_body[column])
    return features


def make_response(status_code, body):
    payload = {
        "statusCode": status_code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body),
    }
    return payload
