'Intl' in this &&
			Intl.Collator &&
			Intl.Collator.supportedLocalesOf &&
			Intl.Collator.supportedLocalesOf('en-WS').length === 1 &&
			Intl.DateTimeFormat &&
			Intl.DateTimeFormat.supportedLocalesOf &&
			Intl.DateTimeFormat.supportedLocalesOf('en-WS').length === 1 &&
			Intl.NumberFormat &&
			Intl.NumberFormat.supportedLocalesOf &&
			Intl.NumberFormat.supportedLocalesOf('en-WS').length === 1