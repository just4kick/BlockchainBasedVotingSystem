// Define the pin numbers for the buttons
const int buttonPin1 = 2; // Change this to the pin number where your first button is connected
const int buttonPin2 = 3;
const int buttonPin3 = 4;
const int buttonPin4 = 5; 

void setup() {
  // Initialize serial communication at 9600 baud
  Serial.begin(9600);

  // Set button pins as input and enable internal pull-up resistors
  pinMode(buttonPin1, INPUT_PULLUP);
  pinMode(buttonPin2, INPUT_PULLUP);
  pinMode(buttonPin3, INPUT_PULLUP);
  pinMode(buttonPin4, INPUT_PULLUP);



}

void loop() {
  // Read the state of the buttons
  int buttonState1 = digitalRead(buttonPin1);
  int buttonState2 = digitalRead(buttonPin2);
  int buttonState3 = digitalRead(buttonPin3);
  int buttonState4 = digitalRead(buttonPin4);


  // Print the state of the buttons to the serial monitor only if button is active
  if (buttonState1 == LOW) {
    Serial.println("btn1");
    delay(3000);
  }
  if (buttonState2 == LOW) {
    Serial.println("btn2");
    delay(3000);

  }
   if (buttonState3 == LOW) {
    Serial.println("btn3");
    delay(3000);
  }
  if (buttonState4 == LOW) {
    Serial.println("btn4");
    delay(3000);

  }

  // Delay for a short time to avoid reading the buttons too quickly
  
}
