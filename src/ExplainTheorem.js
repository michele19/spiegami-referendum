import React, { Component } from 'react';

import Theorem, {TheoremToMaterial} from './Theorem.js'

import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';


export default class ExplainTheorem extends Component {
  constructor(props) {
    super(props);
		const complesso = new Theorem("prendo l'ombrello", "o", [
			new Theorem("", "e", [
				new Theorem("", "o", [
					new Theorem("piove", "", []),
					new Theorem("sta per piovere", "e", [
						new Theorem("ci sono nuvole cariche di pioggia", "", []),
						new Theorem("il vento sta spingendo le nuvole qui", "", [])
					])
				]),
				new Theorem("non voglio bagnarmi", "", [])
			]),
			new Theorem("", "e", [
				new Theorem("devo stare al sole per ore", "", []),
				new Theorem("non voglio scottarmi", "", [])
			])
		])

    this.state = {
    	complesso: complesso
  	}
	}


	render() {
		const asdasd = TheoremToMaterial(this.state.complesso)
		return (
			<div>
			<Paper>
				<List>
					<ListItem key={1}
					primaryText={this.state.complesso.claim}
					secondaryText={this.state.complesso.preview}
					primaryTogglesNestedList={true}
					nestedItems={[
						<ListItem key={1}>
							<Paper>
								<List>
									<ListItem key={1}
										primaryText="piove" />
									<ListItem key={2}
										primaryText="sta per piovere"
										secondaryText="ci sono nuvole cariche di pioggia e il vento sta spingendo le nuvole qui"
										primaryTogglesNestedList={true}
										nestedItems={[
											<ListItem key={1}>
												<Paper>
													<List>
														<ListItem key={1}
															primaryText="ci sono nuvole cariche di pioggia" />
													</List>
												</Paper>
												<Paper>
													<List>
														<ListItem key={1}
															primaryText="il vento sta spingendo le nuvole qui" />
													</List>
												</Paper>
											</ListItem>
										]}
									/>
								</List>
							</Paper>
							<Paper>
								<List>
									<ListItem key={1}
										primaryText="non voglio bagnarmi" />
								</List>
							</Paper>
						</ListItem>,
						<ListItem key={2}>
							<Paper>
								<List>
									<ListItem key={1}
										primaryText="devo stare al sole per ore" />
								</List>
							</Paper>
							<Paper>
								<List>
									<ListItem key={1}
										primaryText="non voglio scottarmi" />
								</List>
							</Paper>
						</ListItem>
					]} />
				</List>
			</Paper>
			<br/>
			{asdasd}
			</div>
		)
	}
}