export default function handler(req, res) {
    const data = [
        {
            "id": 1,
            "title": "PRINT & PRODUCTION",
            "image": "/src/assets/print-production.jpg",
            "category": "REACH YOUR TARGET AUDIENCE"
        },
        {
            "id": 2,
            "title": "BRANDING",
            "image": "/src/assets/branding.jpg",
            "category": "REACH YOUR TARGET AUDIENCE"
        },
        {
            "id": 3,
            "title": "MOTION GRAPHICS",
            "image": "https://wallpapers.com/images/hd/pure-black-oled-9etgj73d7owi4s0g.jpg",
            "category": "REACH YOUR TARGET AUDIENCE"
        },
        {
            "id": 4,
            "title": "PACKAGE DESIGNING",
            "image": "/src/assets/package-designing.jpg",
            "category": "REACH YOUR TARGET AUDIENCE"
        },
        {
            "id": 5,
            "title": "WEBSITE DESIGNING",
            "image": "/src/assets/website-designing.png",
            "category": "REACH YOUR TARGET AUDIENCE"
        },
        {
            "id": 6,
            "title": "VIDEO PRODUCTION",
            "image": "https://s3-alpha-sig.figma.com/img/afd5/15a5/e0c3d903a7a31cdf7ffd059494815155?Expires=1773014400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g8j6dtA-75V0QWWupHNp8QymKR8Xg38Mwx3mVBovA9wb5ersKLGozsDYdK4YIWbUQ4tJAslNtZ9~zEyRT8v2bNbIz3Umw-dSP6It5KBDrIo1XIODGSbwnOqxa-uF8kgVoIvGAiav-Pyif~lm2BTwySUtcofL~XSoLG8~lIWZvnI9ZFfYilgA16vZp2RKMfkNLzCVThrrl6wjBR6pOqUTPpHegzTFQvLPVTR7SLyNNJx5Dgza4TViDDdQHydkiOYhSpEZwAfhung8WoovFnNvtDbkVKmVV7cOpXFTMWHmezhnDwV-wOTbgT5KE7f5z3qit3P~NXHGpZQe2vEjGukCkg__",
            "category": "REACH YOUR TARGET AUDIENCE"
        }
    ];
    res.status(200).json(data);
};
