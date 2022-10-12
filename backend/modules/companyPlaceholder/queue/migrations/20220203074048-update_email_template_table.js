"use strict";
const locationName = "${locationName}";
const address = "${address}";
const date = "${date}";
const time = "${time}";
const GUESTName = "${GUESTName}";
const qrCode = "${qrCode}";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize
      .query(`UPDATE email_template SET template='<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <title></title>
        <meta http-equiv=" Content-Type " content=" text/html; charset=utf-8 ">
        <meta name=" viewport " content=" width=device-width ">
        <meta name=" x-apple-disable-message-reformatting ">
        <style id=" vendor_styles ">
            html {
                -ms-overflow-y: auto !important;
            }
    
            body {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
    
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            table.radius td {
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
            }
    
            table.round td {
                -webkit-border-radius: 500px;
                -moz-border-radius: 500px;
            }
    
            table.columns td.element_connector,
            td.element_connector {
                width: 100% !important;
                width: calc(100%) !important;
                width: -webkit-calc(100%) !important;
            }
    
            div,
            p,
            a,
            li,
            td {
                -webkit-text-size-adjust: none;
            }
    
            @media screen {
                img {
                    width: 100% !important;
                }
            }
        </style>
    </head>
    
    <body class=" body"
        style="padding:0 !important; margin:0 !important; display:block !important; font-size: 16px;
         min-width:100% !important; width:100% !important;  -webkit-text-size-adjust:none; font-family: Verdana, Geneva, Tahoma, sans-serif;">
        <div style="background:#ededed; padding-top:20px; padding-bottom:20px;">
            <table style="width:600px; table-layout:fixed; background: #ffffff; font-family:Helvetica,Arial,sans-serif; letter-spacing: 0.3px;
        word-spacing: 1px;
        line-height: 1.5;" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                    <tr>
                        <td style="background-color: #63c3d1; padding: 20px;"></td>
                    </tr>
                    <tr>
                    <tr>
                        <td>
                            <table border="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center" valign="top" style="padding:80px 30px">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table border="0" cellpadding="0" cellspacing="0" width="30%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <img src="${qrCode}"
                                                                                alt="Qr Code">
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top">
                                                            <h4
                                                                style="color:#627da6;font-family:Helvetica,Arial,sans-serif;font-size:25px;font-weight:600;margin-top:0;margin-bottom:10px;text-align:left;letter-spacing: 0px;">
                                                                Hi ${GUESTName},</br></h4>
                                                            <h1
                                                                style="color:#00296b;font-family:Helvetica,Arial,sans-serif;font-size:30px; line-height:1.4 ;font-weight:600;margin-top:0;margin-bottom:10px;text-align:left; letter-spacing: 0px;">
                                                                Thank you for confirming you slot to visit at
                                                                ${locationName}, ${address} at ${time} on ${date}.</h1>
                                                            <h3
                                                                style="color:#627da6;font-family:Helvetica,Arial,sans-serif;font-size:20px;font-weight:600;margin-top:0;margin-bottom:0px;text-align:left;letter-spacing: 0px;">
                                                                We look forward to your visit!</h3>
                                                            <h3
                                                                style="color:#627da6;font-family:Helvetica,Arial,sans-serif;font-size:20px;font-weight:600;margin-top:0;margin-bottom:0px;text-align:left;letter-spacing: 0px;">
                                                                Please use the QR code for easy check in.</h3>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #63c3d1; padding: 20px;letter-spacing: 0.3px;"></td>
                    </tr>
                    <tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>
' WHERE id='3';`);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
