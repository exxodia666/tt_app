import React, { FC } from 'react'
import { Button, ButtonText } from './styled'
import { TButtonOutlined } from './types'

const ButtonOutlined: FC<TButtonOutlined> = ({ disabled = false, title, onPress }) => {
    return (
        <Button disabled={disabled} onPress={onPress}>
            <ButtonText disabled={disabled}>{title}</ButtonText>
        </Button>
    )
}

export default ButtonOutlined