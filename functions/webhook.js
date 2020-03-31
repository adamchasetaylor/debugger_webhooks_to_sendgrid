const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = function(context, event, callback) {
    let debug_event = JSON.stringify(event, null, 4); 
 
    const email = {
      to: context.TO_EMAIL_ADDRESS,
      from: context.FROM_EMAIL_ADDRESS,
      subject: `[Twilio Alert] Debugger ${event.Level} Received ${event.Sid}`,
      html: `<p>You are receiving this email because the following debugging events triggered.<br><hr><pre>${debug_event}</pre><hr></p>`,
    };
 
    console.log(email);
 
    //send via e-mail      
    sgMail
    .send(email, (error, result) => {
        if (error) {
          //Return Result
          callback(result)
        }
        else {
          //Return Empty Callback
          callback(null, new Twilio.Response())
        }
    });
};  
