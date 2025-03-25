from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
# from routers import users, events, tags, chat
# from authenticator import authenticator


app = FastAPI()

# app.include_router(users.router, tags=["Users"])
# app.include_router(events.router, tags=["Events"])
# app.include_router(tags.router, tags=["Tags"])
# app.include_router(authenticator.router, tags=["Login/Logout"])
# app.include_router(chat.router, tags=["Chat"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/hello")
def hello():
    return {"message": "Hello from My Vault!"}
