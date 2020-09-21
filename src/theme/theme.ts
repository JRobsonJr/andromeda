export const theme = {
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    background: '#FFFFFF',
    helperText: 'gray',
    primary: 'navy',
  },
  fontSizes: [12, 14, 16, 18, 20, 24],
  spaces: [0, 2, 4, 8, 16],
  styles: {
    root: {
      fontFamily: 'body'
    }
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
      fontFamily: 'body',
      textTransform: 'uppercase'
    }
  },
  forms: {
    label: {
      fontSize: 1,
      marginBottom: 1
    },
    input: {
      fontFamily: 'body'
    }
  },
  text: {
    default: {
      fontFamily: 'body',
    },
    folklore: {
      fontStyle: 'italic',
      textTransform: 'lowercase'
    }
  }
}
