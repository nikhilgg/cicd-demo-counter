// test.js - Proper tests for the counter app
const fs = require('fs');
const { JSDOM } = require('jsdom');

console.log('🧪 Running CI/CD Demo Tests...\n');

// Test 1: Check if HTML file exists
let htmlContent;
try {
  htmlContent = fs.readFileSync('index.html', 'utf8');
  console.log('✅ HTML file exists and is readable');
} catch (error) {
  console.log('❌ HTML file not found');
  process.exit(1);
}

// Test 2: Parse and validate JavaScript syntax
console.log('🔍 Checking JavaScript syntax...');
try {
  const dom = new JSDOM(htmlContent, { runScripts: "dangerously" });
  const window = dom.window;
  
  // Test if functions are properly defined
  if (typeof window.increment !== 'function') {
    throw new Error('increment function is not properly defined');
  }
  
  if (typeof window.decrement !== 'function') {
    throw new Error('decrement function is not properly defined');
  }
  
  if (typeof window.reset !== 'function') {
    throw new Error('reset function is not properly defined');
  }
  
  console.log('✅ All JavaScript functions are properly defined');
  
} catch (error) {
  console.log('❌ JavaScript syntax error detected:');
  console.log('   ', error.message);
  process.exit(1);
}

// Test 3: Check for required HTML elements
if (!htmlContent.includes('counter-display')) {
  console.log('❌ Counter display element missing');
  process.exit(1);
}

if (!htmlContent.includes('increment()')) {
  console.log('❌ Increment button missing');
  process.exit(1);
}

console.log('✅ HTML structure is valid');

// Test 4: Functional tests
console.log('🎯 Running functional tests...');
try {
  const dom = new JSDOM(htmlContent, { runScripts: "dangerously" });
  const window = dom.window;
  
  // Test increment
  const initialCounter = window.counter;
  window.increment();
  if (window.counter !== initialCounter + 1) {
    throw new Error('Increment function not working correctly');
  }
  
  // Test decrement
  window.decrement();
  if (window.counter !== initialCounter) {
    throw new Error('Decrement function not working correctly');
  }
  
  // Test reset
  window.reset();
  if (window.counter !== 0) {
    throw new Error('Reset function not working correctly');
  }
  
  console.log('✅ All functional tests passed');
  
} catch (error) {
  console.log('❌ Functional test failed:');
  console.log('   ', error.message);
  process.exit(1);
}

console.log('\n🎉 All tests passed! Ready for deployment.');
console.log('📦 Build successful - deploying to production...');