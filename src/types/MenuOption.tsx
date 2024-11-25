export default interface MenuOption{
    icon: React.FunctionComponent<
        React.ComponentProps<"svg"> & { title?: string, titleId?: string, desc?: string, descId?: string }
        >; 
    label: string; 
    route: string; 
}