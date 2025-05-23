import { Prism } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { SyntaxHighlighterProps as ReactSyntaxHighlighterProps } from 'react-syntax-highlighter'

type SyntaxHighlighterProps = ReactSyntaxHighlighterProps

const SyntaxHighlighter = (props: SyntaxHighlighterProps) => {
    const { children, className, ...rest } = props

    return (
        <Prism
            className={`max-h-[65vh] overflow-y-scroll ${
                className && className
            }`}
            style={oneDark}
            {...rest}
        >
            {children}
        </Prism>
    )
}

export default SyntaxHighlighter
