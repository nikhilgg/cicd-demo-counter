// test.js - Simple tests for the counter app
const fs = require('fs');

console.log('🧪 Running CI/CD Demo Tests...\n');

// Test 1: Check if HTML file exists
try {
  const htmlContent = fs.readFileSync('index.html', 'utf8');
  console.log('✅ HTML file exists and is readable');
} catch (error) {
  console.log('❌ HTML file not found');
  process.exit(1);
}

// Test 2: Check for required elements
const htmlContent = fs.readFileSync('index.html', 'utf8');

if (htmlContent.includes('counter-display')) {
  console.log('✅ Counter display element found');
} else {
  console.log('❌ Counter display element missing');
  process.exit(1);
}

if (htmlContent.includes('increment()')) {
  console.log('✅ Increment function found');
} else {
  console.log('❌ Increment function missing');
  process.exit(1);
}

if (htmlContent.includes('decrement()')) {
  console.log('✅ Decrement function found');
} else {
  console.log('❌ Decrement function missing');
  process.exit(1);
}

// Test 3: Check for syntax errors (basic)
if (htmlContent.includes('function increment()') || htmlContent.includes('function increment')) {
  console.log('✅ JavaScript syntax looks good');
} else {
  console.log('❌ JavaScript syntax issues detected');
  process.exit(1);
}

console.log('\n🎉 All tests passed! Ready for deployment.');
console.log('📦 Build successful - deploying to production...');