from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def registration_form():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    # Get form data
    full_name = request.form.get('full_name')
    username = request.form.get('username')
    email = request.form.get('email')
    phone = request.form.get('phone')
    password = request.form.get('password')
    confirm_password = request.form.get('confirm_password')
    gender = request.form.get('gender')

    # Validate and process the data
    if password != confirm_password:
        return "Passwords do not match. Please try again."

    # Simulate saving to a database or processing
    return f"Registration successful for {full_name} ({username})!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

