const showMessage = (msg?:any) => {
    if(msg == undefined) msg = 'No Message.'
    console.log(msg);
}

export default showMessage;