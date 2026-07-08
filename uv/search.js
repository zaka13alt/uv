function search(input, template) {
    try {
        // Simple URL check
        return new URL(input).toString();
    } catch (err) {
        // Fallback to configured search template
        return template.replace('%s', encodeURIComponent(input));
    }
}
