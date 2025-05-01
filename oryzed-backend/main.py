from fastapi import FastAPI, Query # type: ignore
from googlesearch import search # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Oryzed Backend!"}

@app.get("/search")
def search_legal_topics(query: str = Query(..., description="Search query")):
    try:
        # Perform a Google search and fetch the top 5 results
        results = list(search(query, num_results=5))
        return {"query": query, "results": results}
    except Exception as e:
        return {"error": str(e)}