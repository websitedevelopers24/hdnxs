function openPDF(country) {
    const pdfLinks = {
        'Schengen': 'Pdfs/SCHENGEN VISA.pdf',
        'Egypt': 'Pdfs/EGYPT VISA.pdf',
        'China': 'Pdfs/CHINA VISA.pdf',
        'United_States': 'Pdfs/UNITED STATES VISA.pdf',
        'Australia': 'Pdfs/AUSTRALIA VISA.pdf',
        'Thailand': 'Pdfs/THAILAND VISA.pdf',
        'Sri_Lanka': 'Pdfs/SRI LANKA VISA.pdf',
        'Dubai': 'Pdfs/DUBAI VISA.pdf',
        'Armenia': 'Pdfs/ARMENIA VISA.pdf',
        'Bali': 'Pdfs/BALI VISA.pdf',
        'Brazil': 'Pdfs/BRAZIL VISA.pdf',
        'Canada': 'Pdfs/CANADA VISA.pdf',
        'Cyprus': 'Pdfs/CYPRUS VISA.pdf',
        'India': 'Pdfs/INDIA VISA.pdf',
        'Japan': 'Pdfs/JAPAN VISA.pdf',
        'Tunis': 'Pdfs/TUNIS VISA.pdf',
        'United_Kingdom': 'Pdfs/UNITED KINGDOM VISA.pdf',
        'Turkey': 'Pdfs/TURKEY VISA.pdf'
    };
    const link = pdfLinks[country];
    if (link) {
        window.open(link, '_blank');
    } else {
        alert('PDF link not found for ' + country);
    }
}
