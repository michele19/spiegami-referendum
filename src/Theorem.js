import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';


export default class Theorem {
	constructor(claim, connector, reasons) {
		this.reasons = reasons;
		this.connector = connector;
		this.claim = claim;
	}

	get getClaim() {
		return this.claim || this.reasons.map((th) => th.getClaim).join(' ' + this.connector + ' ');
	}

	get preview() {
		return this.reasons.map((th) => th.getClaim).join(' ' + this.connector + ' ');
	}
}

export function theoremToMaterial(theorem) {
	if (theorem.reasons.length === 0) {
		return <ListItem
			key={theorem.claim}
			primaryText={theorem.claim}
		/>
	} else if (
		theorem.connector === "o" &&
		!theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
			<List>
				{listItems}
			</List>
		)
	} else if (
		theorem.connector === "o" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		console.log(listItems)
		return (
			<Paper>
				<List>
					<ListItem
						key={theorem.claim}
						primaryText={theorem.claim}
						secondaryText={theorem.preview}
						primaryTogglesNestedList={true}
						nestedItems={listItems}
					/>
				</List>
			</Paper>
		)
	} else if (
		theorem.connector === "e" &&
		!theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item) => <Paper><List>{item}</List></Paper>)
		return (
			<ListItem>
				{paperItems}
			</ListItem>
		)
	} else if (
		theorem.connector === "e" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item) => <Paper><List>{item}</List></Paper>)
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
				secondaryText={theorem.preview}
				primaryTogglesNestedList={true}
				nestedItems={[<ListItem key={1}>{paperItems}</ListItem>]}
			/>
		)
	}

}

export function jsonToTheorem(json) {
	const claim = json.claim ? json.claim : "";
	const connector = json.connector ? json.connector : "";
	const reasons = json.reasons ? json.reasons.map(jsonToTheorem) : []
	return new Theorem(claim, connector, reasons)
}

export function jsonToMaterial(json) {
	return theoremToMaterial(jsonToTheorem(json))
}