#------------------------------------------#
#    __                __   __ __   __     # 
#   |__| |__| __ |\ | (__  |  |  | |  |    #
#   |       |    | \|  __) |  |  | |__|    #
#                                      \   #
#        By: The BEGood Team (2024)        #
#------------------------------------------#

from flask import Flask, render_template, request
import speech_recognition as sr
from pydub import AudioSegment
from io import BytesIO
import pyttsx3 as pt

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/study/")
def study():
    return render_template('study/index.html')

@app.route("/practice/")
def practice():
    return render_template('practice/index.html')

@app.route("/rules/")
def rules():
    return render_template('rules/index.html')

@app.route("/about-nsmq/")
def about_nsmq():
    return render_template('about-nsmq/index.html')

@app.route("/select-round/")
def select_round():
    return render_template('select-round/index.html')

@app.route("/round-1/")
def round_1():
    return render_template('round-1/index.html')

@app.route("/round-2/")
def round_2():
    return render_template('round-2/index.html')

@app.route("/round-3/")
def round_3():
    return render_template('round-3/index.html')

@app.route("/round-4/")
def round_4():
    return render_template('round-4/index.html')

@app.route("/round-5/")
def round_5():
    return render_template('round-5/index.html')


@app.route('/process_audio', methods=['POST'])

def process_audio():
    if 'audio' not in request.files:
        return "No audio file found", 400

    audio_file = request.files['audio']
    audio_data = BytesIO(audio_file.read())

    audio = AudioSegment.from_wav(audio_data)

    recognizer = sr.Recognizer()

    with sr.AudioFile(BytesIO(audio.raw_data)) as source:
        audio = recognizer.record(source)
        try:
            text = recognizer.recognize_google(audio)
            return text
        except sr.UnknownValueError:
            return "Speech Recognition could not understand the audio", 400
        except sr.RequestError as e:
            return f"Could not request results from Google Speech Recognition service; {e}", 500

# Initialize Text-to-Speech engine
engine = pt.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

speak("Testing my text to speech program.")

if __name__ == '__main__':
    app.run(debug=True)
