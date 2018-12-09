from flask import Flask, request



app = Flask(__name__)

@app.route('/result', methods = ['GET', 'POST'])
def result():
    if request.method == 'GET':
        r = request
        place = request.args.get('first', None)
        if place:
            return place

        return "No place information is given"

if __name__ == '__main__':
    app.run(debug = True)