/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsernameCreateFormInputValues = {
    name?: string;
    password?: string;
};
export declare type UsernameCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsernameCreateFormOverridesProps = {
    UsernameCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsernameCreateFormProps = React.PropsWithChildren<{
    overrides?: UsernameCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsernameCreateFormInputValues) => UsernameCreateFormInputValues;
    onSuccess?: (fields: UsernameCreateFormInputValues) => void;
    onError?: (fields: UsernameCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsernameCreateFormInputValues) => UsernameCreateFormInputValues;
    onValidate?: UsernameCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsernameCreateForm(props: UsernameCreateFormProps): React.ReactElement;
