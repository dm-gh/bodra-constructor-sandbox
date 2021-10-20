export async function copyTextToClipboard(text: string) {
    if (!navigator.clipboard) {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        return;
    }

    await navigator.clipboard.writeText(text);
}
