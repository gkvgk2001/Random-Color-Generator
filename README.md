
# Random Color Generator

This project is a simple web application that generates random colors in both hexadecimal (hex) and RGB formats. It allows users to generate colors and copy the generated color value to their clipboard.

## Features

- Generate random colors in hex format.
- Generate random colors in RGB format.
- Copy the generated color value to the clipboard.

## Technologies Used

- HTML
- CSS
- JavaScript

## Javascript Function Explanation:

### Hex Color Generator

#### `createhexcolor()`
- This function is triggered when the "Create Hex Color" button is clicked.
- It generates a random hex color by randomly selecting characters from the set "0123456789ABCDEF" and concatenating them to form a 6-character hex color code.
- It updates the text content of the `.hex-color-value` paragraph element with the generated hex color code.
- It updates the background color of the `.hex-color-generator` div, the "Create Hex Color" button, and the "Copy To Clipboard" button with the generated hex color code.

#### `copyHexColorToClipboard()`
- This function is triggered when the "Copy To Clipboard" button next to the hex color is clicked.
- It copies the text content of the `.hex-color-value` paragraph element (hex color code) to the user's clipboard using the `navigator.clipboard.writeText()` method.
- It displays an alert confirming that the hex color has been copied to the clipboard.

### RGB Color Generator

#### `createRgbColor()`
- This function is triggered when the "Create Rgb Color" button is clicked.
- It retrieves the values of the Red, Green, and Blue sliders (`#red`, `#green`, `#blue`) and stores them in separate variables.
- It updates the text content of the `.rgb-color-value` paragraph element with the generated RGB color code.
- It updates the background color of the `.rgb-color-generator` div, the "Create Rgb Color" button, and the "Copy To Clipboard" button with the generated RGB color code.

#### `copyRgbColorToClipboard()`
- This function is triggered when the "Copy To Clipboard" button next to the RGB color is clicked.
- It copies the text content of the `.rgb-color-value` paragraph element (RGB color code) to the user's clipboard using the `navigator.clipboard.writeText()` method.
- It displays an alert confirming that the RGB color has been copied to the clipboard.

### Event Listeners
- Event listeners are added to the "Create Hex Color" button, "Create Rgb Color" button, and "Copy To Clipboard" buttons for both hex and RGB colors. These listeners trigger the corresponding functions when the buttons are clicked.


## Usage

1. Clone the repository to your local machine.
    ```bash
    git clone  https://github.com/gkvgk2001/Random-Color-Generator.git
    ```

2. Navigate to the project directory.
    ```bash
    cd random-color-generator
    ```

3. Open the `index.html` file in your preferred web browser.

4. Use the following functionalities:
    - Click the "Create Hex Color" button to generate a random hex color.
    - Use the sliders for Red, Green, and Blue to customize the RGB color, then click the "Create Rgb Color" button.
    - Click the "Copy To Clipboard" buttons to copy the generated color value (hex or RGB) to your clipboard.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.
