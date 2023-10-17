from flask import Flask, render_template, request, redirect, url_for, jsonify
import psycopg2
import pandas as pd
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("Project3dashboard.html")

@app.route("/api/bitcoin")
def get_bitcoin():
    conn = psycopg2.connect(database="Currency_db",
                        user="postgres",
                        password="postgres",
                        port="5432")
    query = "SELECT * FROM bitcoin"
    data = pd.read_sql(query, conn)
    conn.close()
    return jsonify(data.to_json(orient= "records"))


@app.route("/api/gold")
def get_gold():
    conn = psycopg2.connect(database="Currency_db",
                        user="postgres",
                        password="postgres",
                        port="5432")
    query = "SELECT * FROM gold"
    data = pd.read_sql(query, conn)
    conn.close()
    return jsonify(data.to_json(orient= "records"))


@app.route("/api/silver")
def get_silver():
    conn = psycopg2.connect(database="Currency_db",
                        user="postgres",
                        password="postgres",
                        port="5432")
    query = "SELECT * FROM silver"
    data = pd.read_sql(query, conn)
    conn.close()
    return jsonify(data.to_json(orient= "records"))

if __name__ == "__main__":
    app.run(debug=True)
