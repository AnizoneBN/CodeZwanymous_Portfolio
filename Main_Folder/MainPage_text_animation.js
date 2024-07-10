 
        document.addEventListener('DOMContentLoaded', () => {
            const textElement = document.getElementById('typing-text');
            const text = textElement.textContent;
            textElement.textContent = '';
            let index = 0;

            function typeLetter() {
                if (index < text.length) {
                    textElement.textContent += text[index];
                    index++;
                    setTimeout(typeLetter, 50); // Adjust the delay here
                }
            }

            typeLetter();
        });

        document.getElementById('search-button').addEventListener('click', function() {
            var query = document.getElementById('search-input').value;
            if (query) {
                var resultsContainer = document.getElementById('search-results');
                resultsContainer.innerHTML = "You searched for: " + query;
            }
        });
 