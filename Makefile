
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

example: build
	@open example/index.html

.PHONY: clean example