"""Generate a printable QR PNG that points to the landing page URL.

Usage:
  python generate_qr.py --url "https://your-site.netlify.app/" --out qr_landing.png

If pillow/qrcode are not installed, run:
  pip install qrcode pillow
"""
import argparse
import qrcode

parser = argparse.ArgumentParser()
parser.add_argument('--url', default='https://geuseis-hlia-menu.netlify.app/', help='Landing page URL')
parser.add_argument('--out', default='qr_landing.png', help='Output PNG filename')
parser.add_argument('--size', type=int, default=10, help='Box size for QR (bigger = higher DPI)')
args = parser.parse_args()

qr = qrcode.QRCode(box_size=args.size, border=4)
qr.add_data(args.url)
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
img.save(args.out)
print(f'QR saved to {args.out} → points to {args.url}')