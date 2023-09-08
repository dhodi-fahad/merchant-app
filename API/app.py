import fastapi

app = fastapi.FastAPI()


@app.get("/users")
def get_users():
    users = [
        {"id": 1, "name": "John Doe"},
        {"id": 2, "name": "Jane Doe"},
    ]
    return users
