function openPDF(country) {
    const pdfLinks = {
        'Schengen': 'pdfs/SCHENGEN VISA.pdf',
        'Egypt': 'pdfs/EGYPT VISA.pdf',
        'China': 'pdfs/CHINA VISA.pdf',
        'United_States': 'pdfs/UNITED STATES VISA.pdf',
        'Australia': 'pdfs/AUSTRALIA VISA.pdf',
        'Thailand': 'pdfs/THAILAND VISA.pdf',
        'Sri_Lanka': 'pdfs/SRI LANKA VISA.pdf',
        'Dubai': 'pdfs/DUBAI VISA.pdf',
        'Armenia': 'pdfs/ARMENIA VISA.pdf',
        'Bali': 'pdfs/BALI VISA.pdf',
        'Brazil': 'pdfs/BRAZIL VISA.pdf',
        'Canada': 'pdfs/CANADA VISA.pdf',
        'Cyprus': 'pdfs/CYPRUS VISA.pdf',
        'India': 'pdfs/INDIA VISA.pdf',
        'Japan': 'pdfs/JAPAN VISA.pdf',
        'Tunis': 'pdfs/TUNIS VISA.pdf',
        'United_Kingdom': 'pdfs/UNITED KINGDOM VISA.pdf',
        'Turkey': 'pdfs/TURKEY VISA.pdf'
    };
    const link = pdfLinks[country];
    if (link) {
        window.open(link, '_blank');
    } else {
        alert('PDF link not found for ' + country);
    }
}
