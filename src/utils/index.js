export function delay(time, fn){
    setTimeout(()=>{
        fn();
    }, time)
}