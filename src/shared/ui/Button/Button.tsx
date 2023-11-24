import {type ButtonHTMLAttributes, type FC, type ReactNode} from "react";

export enum ButtonThemes {
    DEFAULT = "bg-gray-900 text-gray-200"
}

type Props = {
    children: ReactNode;
    theme: ButtonThemes;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({
    children,
    className,
    theme = ButtonThemes.DEFAULT,
    ...otherProps
}) => (
    <button
        data-testid={"button"}
        type={"button"}
        className={`${theme} ${className} px-2 py-1 rounded-md duration-200  disabled:opacity-50 active:scale-90`}
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;
