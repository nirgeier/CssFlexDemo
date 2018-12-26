let
    container = document.querySelector('.container'),
    codeSample = document.querySelector('.code-sample');

/**
 * Add the navigation header to all pages.
 * This way the navigation is dynamic
 */
function addHeader() {
    // Build the navigation links
    let content = `
        <ul>
            <li class="title">Flex Container</li>
            <li class="link-flex-container"><a href="01-flex-direction.html">flex-direction</a></li>
            <li class="link-flex-container"><a href="02-flex-wrap.html">flex-wrap</a></li>
            <li class="link-flex-container"><a href="03-flex-flow.html">flex-flow</a></li>
            <li class="link-flex-container"><a href="04-justify-content.html">justify-content</a></li>
            <li class="link-flex-container"><a href="05-align-items.html">align-items</a></li>
        </ul>
        <br/>
        <br/>
        <ul>
            <li class="title">Flex Items</li>
            <li class="link-flex-item"><a href="06-align-self.html">align-self</a></li>
            <li class="link-flex-item"><a href="07-flex-grow.html">flex-grow</a></li>
            <li class="link-flex-item"><a href="08-flex-shrink.html">flex-shrink</a></li>
            <li class="link-flex-item"><a href="09-flex-basis.html">flex-basis</a></li>
            <li class="link-flex-item"><a href="10-flex.html">flex</a></li>
            <li class="link-flex-item"><a href="11-order.html">order</a></li>
            <li class="link-flex-item"><a href="12-flex-item.html">flex-item</a></li>
        </ul>`;
    // Add the navigation to the page
    document.querySelector('nav').innerHTML = content;
    // Mark the current page
    document.querySelector(`nav a[href="${document.title}"]`).parentNode.classList.add('active');
}

/**
 * Update the desired style 
 * @param {String} className - The class name to set to the continer 
 */
function setStyle(className) {
    container.className = "container";
    container.classList.add(className);
    showStyle(className);
}

/**
 * Display the current style of the container
 * @param {String} className - The current attached style class 
 */
function showStyle(className) {
    // Load the styles
    let index = 0,
        rules,
        stylesheets = document.styleSheets,
        selectorText;

    // Search for the internal style. 
    // The internal style will have no rel(href) 
    for (; ;) {
        // Check to see if this is the style tag
        if (!stylesheets[index].href) {
            rules = stylesheets[index].rules;
            break;
        }
        ++index;
    }

    // Clear current code-sample
    codeSample.innerHTML = "";

    // Loop over the selectors and search for match
    Object.keys(rules).forEach(ruleIndex => {
        // Get the current rule
        let current = rules[ruleIndex];
        // The rule is the Array index of the given item
        selectorText = current.selectorText;
        // Find if we found our selector
        if (selectorText.indexOf(className) > -1) {
            // Loop over the current rule css properties and convert them to a print-friendly text
            for (let index = 0; index < current.style.length; index++) {
                codeSample.innerHTML += `&nbsp;&nbsp;<span class="style-property">${current.style[index]}</span> : 
                                         <span class="style-value">${current.style[current.style[index]]};</span><br/>`;
            } // for
        } // if
    });

}

// Add the header = navigation links to the page
addHeader();

// Check to see if we need to set the code section
document.querySelector('fieldset') ? setStyle('sample1') : undeifned;