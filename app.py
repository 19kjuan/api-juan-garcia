from flask import Flask

app = Flask(__name__)

@app.route('/')
def welcome():
    return "<h1>Welcome to Flask App!</h1><hr>"

@app.route('/route2')
def second_route():
    return "<strong>You're now at Route 2</strong>"

@app.route('/route3')
def third_route():
    return "<em>Now on Route 3</em><hr>"

@app.route('/grades')
@app.route('/grades/<float:grade1>/<float:grade2>/<float:grade3>')
def calculate_grades(grade1=0, grade2=0, grade3=0):
    final_score = (grade1 * 0.3) + (grade2 * 0.3) + (grade3 * 0.4)
    return f"<h1>Your final grade is: {final_score}</h1><hr>"

@app.route('/age')
@app.route('/age/<int:age>')
def check_age(age=0):
    if age < 18:
        result = "You are a minor"
    elif age < 60:
        result = "You are an adult"
    else:
        result = "You are a senior"
    return f"<h1>Classification: {result}</h1><hr>"

if __name__ == "__main__":
    app.run(debug=True)
