from flask import Flask, render_template, jsonify
import psycopg2

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/data")
def get_data():
    conn = psycopg2.connect(database="Currency_db", user= "postgres", password="postgres", host= "localhost, port = '5432")
    cursor = conn.cursor()
    query = "SELECT * FROM bitcoin"
    data = cursor.execute(query).fetchall()
    conn.close()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
