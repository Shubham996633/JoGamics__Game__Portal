export function drawStatusText(context, input){
    context.font = '30px Helvetica'
    context.fillText('Last Input: ' + input.lastKey, 20, 50)
}