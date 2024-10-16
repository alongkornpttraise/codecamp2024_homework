function getDesignToken() {
    // เก็บค่า design-token ในตัวแปร
    const designTokens = {
        'color-primary-500': '#3498db',
        'color-secondary-500': '#2ecc71',
        'text-color': '#333333',
        'font-base': '16px',
        'font-weight-light': '300',
        'font-weight-regular': '400',
        'font-weight-bold': '700',
        'spacing-small': '8px',
        'spacing-medium': '16px',
        'spacing-large': '24px',
        'border-radius-small': '4px',
        'border-radius-medium': '8px',
        'border-radius-large': '12px'
    };

    // รับค่า input จาก prompt
    let tokenName = prompt('Please enter design token name:');

    // ตรวจสอบค่า design-token และแสดงผล
    if (designTokens[tokenName] !== undefined) {
        alert(`The value of ${tokenName} is ${designTokens[tokenName]}`);
    } else {
        alert(`Design token ${tokenName} not found.`);
    }
}
