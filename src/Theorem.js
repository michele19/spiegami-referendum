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

export function TheoremToMaterial(theorem) {
	if (theorem.reasons.length === 0) {
		return <ListItem
			key={theorem.claim}
			primaryText={theorem.claim}
		/>
	} else if (
		theorem.connector === "o" &&
		!theorem.claim
	) {
		const listItems = theorem.reasons.map(TheoremToMaterial)
		return (
			<Paper>
				<List>
					{listItems}
				</List>
			</Paper>
		)
	} else if (
		theorem.connector === "o" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(TheoremToMaterial)
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
		const listItems = theorem.reasons.map(TheoremToMaterial)
		const paperItems = listItems.map((item) => <Paper><List>{item}</List></Paper>)
		return paperItems
	} else if (
		theorem.connector === "e" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(TheoremToMaterial)
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