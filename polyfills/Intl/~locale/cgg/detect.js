'Intl' in this &&
			Intl.Collator &&
			Intl.Collator.supportedLocalesOf &&
			Intl.Collator.supportedLocalesOf('cgg').length === 1 &&
			Intl.DateTimeFormat &&
			Intl.DateTimeFormat.supportedLocalesOf &&
			Intl.DateTimeFormat.supportedLocalesOf('cgg').length === 1 &&
			Intl.NumberFormat &&
			Intl.NumberFormat.supportedLocalesOf &&
			Intl.NumberFormat.supportedLocalesOf('cgg').length === 1