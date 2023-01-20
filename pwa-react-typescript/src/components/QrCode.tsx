import { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

 


const QrCode = () => {
    const [url, setUrl] = useState('');

    const qrRef = useRef(null);

    const downloadQRCode = async () => {
        let canvas = document.querySelector("canvas")!;
        let image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = image;
    };

    useEffect(() => {
        downloadQRCode();
        setUrl(process.env.REACT_APP_WEBSITE as string);
    }, [])

    const qrcode = (
        <QRCodeCanvas
            id="qrCode"
            value={url}
            size={300}
            bgColor={"#00ff00"}
            level={"H"}
        />
       
    );

    return (
        <div className="qrcode__container">
            <h1>Scan with phone.</h1>
            <hr/>
            <div ref={qrRef}>{qrcode}</div>
        </div>
    );
};

export default QrCode;
