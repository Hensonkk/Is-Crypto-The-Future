from flask import Flask, render_template, request, redirect, url_for, jsonify
import psycopg2
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/data")
def get_data():
    conn = psycopg2.connect(database="Currency_db",
                        user="postgres",
                        password="postgres",
                        port="5432")
    query = "SELECT * FROM bitcoin"
    data = pd.read_sql(query, conn)
    conn.close()
    return jsonify(data.to_json(orient= "records"))

if __name__ == "__main__":
    app.run(debug=True)
