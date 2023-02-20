import { Center, Spinner } from "native-base";

type SpinnerProps={
    size?:string|number;
    color?:string
}
export function LoadingSpinner({color='emerald.500',size='sm'}:SpinnerProps){
    return(
        <>
        <Center flex={1}>
            <Spinner size={size}  color={color}/>
        </Center>
        </>
    )

}