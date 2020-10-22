exports.seed = (knex, Promise) => {
  return knex('letter').del()
    .then(function () {
      return knex('letter').insert([
        {id: 0, number: 0, title: 'CLIENT APPROVAL', comment_count: 0, paragraphs: JSON.stringify([
          'Before you read this contract, it is important that you understand that this document is the basis for building your new home.  All previous discussions that you have had with the consultant about various products etc. are now irrelevant as this document represents what you have finally agreed on',
          'To ensure that you acknowledge all the aspects of this schedule, we will tick each clause upon your confirmation that you fully understand and for any reason you do not – please ask your consultant to explain'
        ])},
        {id: 1, number: 1, title: 'CONTRACT NAMES', comment_count: 0, paragraphs: JSON.stringify([
          'It is important that this Building Contract is in the same name as the title of your section or property.  Councils will only accept a Building Consent Application where the name on the application matches the Title, if you are considering changing your section purchase name to the likes of a Trust please notify your Home Consultant of this change',
        ])},
        {id: 2, number: 2, title: 'CERTIFICATE OF TITLE', comment_count: 0, paragraphs: JSON.stringify([
          'If a certificate of title has not been issued at the time of the dated signing of this contract then no allowance has been made for the financial outcomes of any of the Consent Notices that may be attached to the Certificate of Title.  A variation may have to be presented after the dated signing of the contract upon final sighting of the said Consent Notices (if any)',
        ])},
        {id: 4, number: 4, title: 'PRELIMINARY AND GENERAL', comment_count: 0, paragraphs: JSON.stringify([
          'This schedule of materials and works shall be read in conjunction with the plans, but where any ambiguity occurs, the schedule shall take precedence',
          'All work is to be completed in accordance with the schedule of material and works best industry practice, including the NZ Building Code, and the relevant acceptable solutions. Additional costs incurred because of changes in the building code or conditions over the contract period will be charged to the owner',
          'The pictures shown in this schedule are an example only to give an indication of product and the wording is to take precedence over any of the pictures',
          'It is the client’s responsibility to highlight all covenants etc',
          'Registered Master Builders 10-year guarantee included',
          'Includes full working drawings',
          'Includes a Provisional Sum of $0,000.00 for the building consent fees, BRANZ levy and the department of building housing levy',
          'Development contribution levy & service connection fees by Tasman District Council are not included',
          'Does not include the service connection fee for storm water and sewer charge by the Tasman District Council',
          'Includes the Network Tasman new load policy fee, this will be included as part of your electrical',
          'Resource consent fees are not included ',
          'Maintenance period shall be 3 years from possession date',
          'From accepting and signing a variation to the contract, an invoice shall be created. All payments of variations are due within seven (7) working days of the date the invoice is issued.  If there is a delay in payment this could result in a delay of your build ',
          'Builders ‘All Risk’ & Liability insurance cover whilst under construction for goods and services by Jennian Homes only',
          'Jennian Homes have an active Health & Safety Policy in place and is committed to this policy',
          'If owners require any extra work, the builder’s labour rate will be charged out at $90.00 per hour ',
          'If owners require any Draughting and Architectural extra’s or variations these will be charged out at an hourly rate of $100 per hour',
          'For any variation that may occur to the contract price Jennian Homes will notify our client at the earliest possible stage',
          'House professionally cleaned internally windows internally and externally to the completed home',
          'Removal of all rubbish (skip on site)',
          'No allowance has been made for the forming of a driveway; this may be an extra to the contract if this is required to gain access to the site as part of the earthworks',
          'No allowance has been made for additional works i.e. retaining walls or fences to any internal boundaries due to siteworks performed on adjacent sections that could possibly undermine ground levels',
          'No allowance has been made for any alterations to the street crossing.  Jennian Homes will inspect the existing footpath, kerb and crossing prior to the works beginning and will notify the owner of any damage. Jennian Homes will ensure that all their contractors use the dedicated vehicle crossing, however if this crossing becomes damaged Jennian Homes will not be responsible to rectify the damage',
          'All costs shown include GST',
        ])},
        {id: 5, number: 5, title: 'OWNERS CARE INSUREANCE', comment_count: 0, paragraphs: JSON.stringify([
          'There is no owners work and/or materials being undertaken by the owner ',
          'Whenever any part of this contract, works are undertaken by the owner or any materials forming part of the works are supplied by the owner this can only be done with the consent of Jennian Homes',
          'Such works shall become the responsibility of the owner for the correct insurance cover of the works at the owners cost that any owners work and/or materials are covered',
          'Light fittings or plumbing fittings that are to be supplied by the owner may incur some additional charges depending on the complexity of the installation of these items',
          'It is the responsibility of the owner to ensure that the delivery of their products or contractors adhere to the Jennian Homes timeline',
          'The following owners work and/or materials are being undertaken by the owner –',
        ])},
        {id: 6, number: 6, title: 'ENGINEERING', comment_count: 0, paragraphs: JSON.stringify([
          'This project has a RibRaft floor which will need to be inspected and passed by a Structural Engineer, the Engineers professional fees for these inspections has been included in this schedule',
          'Apart from the RibRaft floor this project has no requirement for an Engineer to be involved; however through the discovery of poor bearing ground during the excavation it may become necessary to engage an engineer for a specific foundation design involving additional costs',
          'No allowance has been made for a Geotechnical Engineer',
        ])},
        {id: 7, number: 7, title: 'TEMPORARY POWER & MAINS POWER SUPPLY', comment_count: 0, paragraphs: JSON.stringify([
          'This contract makes provision for a temporary power supply from the on-site black box',
          'Includes the supply and laying of a maximum of 15.0m of underground power and telephone cable with connection to the onsite power box and connection fees',
        ])},
        {id: 8, number: 8, title: 'EXCAVATION', comment_count: 0, paragraphs: JSON.stringify([
          'This contract includes a Provisional Sum of $1,150 for soft ground conditions',
          'This contract makes provision for the excavation of the area to be covered by the building floor slab including an area extending up to 1.0m beyond the floor slab perimeter',
          'Allowance has been made for this area to be excavated to a maximum depth of 300mm below natural ground level; then filled to a depth of 250mm of compacted hard fill and sand blinding.  However, if this excavation depth is exceeded to obtain solid bearing this would become an extra to the contract price and would be treated as a variation to the contract',
          'All topsoil shall be stripped from the area to be covered by the building and removed from site',
          'Includes the excavation and removal of spoil up to 80.83m3',
          'Includes the supply and compaction of hardfill up to 67.36m3',
          'If additional quantities are required to provide a level platform, due to soft soil, height requirements, etc. these will be charged as a ‘Variation to Contract’',
        ])},
        {id: 9, number: 9, title: 'RETAINING WALLS', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for any form of timber retaining wall',
        ])},
        {id: 10, number: 10, title: 'FLOOR SYSTEM', comment_count: 0, paragraphs: JSON.stringify([
          'This contract allows for a Firth RibRaft floor system',
          'This is a reinforced concrete waffle raft floor slab consisting of a grid of polystyrene pods to form a reinforced concrete floor slab',
          'The perimeter edge of the foundation will be boxed and left fairface finish not plastered or painted',
          'Floor Slab will be 85mm thick concrete reinforced with 615-500E ductile mesh',
        ])},
        {id: 11, number: 11, title: 'FRAMING', comment_count: 0, paragraphs: JSON.stringify([
          'All timber frames shall be Radiata kiln dried 90 x 45 H1.2 treated timber',
          'Trusses shall be Radiata Pine kiln dried gang nail with a 25-degree pitch spaced at 900 centres',
          'Includes timber framed columns to entry',
        ])},
        {id: 12, number: 12, title: 'ROOF, FASCIA, GUTTER & DOWNPIPES', comment_count: 0, paragraphs: JSON.stringify([
          'Roofing shall be Colorsteel Endura 5 Rib trapezoidal long run steel roofing',
          'Fascia and gutter shall be Colorsteel Endura fascia and gutter system ',
          'Downpipes shall be 80mm PVC round profile painted',
        ])},
        {id: 13, number: 13, title: 'CLADDING', comment_count: 0, paragraphs: JSON.stringify([
          'Shall be a combination of Resene Rockcote 50mm insulated panel system complete with graphex rendered plaster and James Hardies Linea weather boards on a 50x25mm cavity batten system',
          'Gables to be clad as per plans',
          'Linea external corners shall be fitted with painted Axent Trim box corners',
        ])},
        {id: 14, number: 14, title: 'SOFFITS', comment_count: 0, paragraphs: JSON.stringify([
          'Shall be horizontal, and lined with Hardies Hardiflex complete with PVC jointers',
        ])},
        {id: 15, number: 15, title: 'ALUMINIUM JOINERY, ENTRANCE & GARAGE DOOR', comment_count: 0, paragraphs: JSON.stringify([
          'All aluminium window joinery shall be the Altherm Residential Suite',
          'Windows and doors in the living areas to be Low E Max double glazed with argon gas and thermal spaces',
          'Windows and doors in the garage to be single glazed',
          'Powder-coated aluminium windows and doors as per plan',
          'Obscure glazing to the bathroom and ensuite',
          'Window hardware to be colour matched Urbo',
          'Window reveals to 19mm thick, pine paint grade',
          'Including venting catches to all windows excluding slider windows',
          'Door sills to be flush with floor coverings.  (Rebated into the floor slab) ',
          'Entry door to be a Latitude vertical TG&V aluminium entrance door set in an aluminium frame',
          'Entry door shall be fitted with a Windsor 1335S-BN Card Entry Lever Set with two cards, two keys and 4 batteries',
          'Garage door to be a Futura sectional, fully insulated door with an internal auto opener, two remotes',
          'Garage door openers to be wireless',
          'Garage door reveals to be paint grade',
        ])},
        {id: 16, number: 16, title: 'PERGOLAS', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for the building of a pergola',
        ])},
        {id: 17, number: 17, title: 'THERMAL INSULATION', comment_count: 0, paragraphs: JSON.stringify([
          'Pink Batts to all outer walls of the home shall be R2.6',
          'Pink Batts to the ceiling of the home shall be R3.6',
          'No insulation shall be fitted to the external walls and ceiling of the garage, but will be fitted to the internal wall between garage and house',
        ])},
        {id: 18, number: 18, title: 'INTERIOR LININGS', comment_count: 0, paragraphs: JSON.stringify([
          'Rondo steel ceiling batten system fitted to Rondo expansion clips to minimize any screw popping ',
          'Ceilings shall be lined with 13mm GIB',
          'Walls shall be lined horizontally with 10mm GIB',
          'Aqualine GIB to walls and ceilings of the bathroom and ensuite',
          'All walls and ceilings to be stopped to a level 4 finish ',
          'All 90-degree external corners shall be square stopped',
        ])},
        {id: 19, number: 19, title: 'CEILING HEIGHTS / FEATURES / BULKHEADS', comment_count: 0, paragraphs: JSON.stringify([
          'All rooms shall have 2.4m high flat ceilings',
          'No allowance has been made for a bulkhead down from the ceiling above the kitchen joinery',
        ])},
        {id: 20, number: 20, title: 'SKIRTING, SCOTIA, ARCHITRAVE', comment_count: 0, paragraphs: JSON.stringify([
          'Skirting shall be 60mm x 12mm MDF bevel edge with the same profile in pine to the wet areas',
          'Architrave shall be 60mm x 12mm MDF bevel edge with the same profile in pine to the wet areas',
          'Scotia shall be 55mm GIB coving fitted to the wall/ceiling junction in the 2.4-metre-high ceiling areas',
          'Scotia shall be MDF bevelled cornice to the wall/ceiling junction in the wardrobes and cupboards',
          'Above the garage door shall be square stopped to the wall/ceiling junction'
        ])},
        {id: 21, number: 21, title: 'WARDROBES', comment_count: 0, paragraphs: JSON.stringify([
          'Wardrobe joinery from Re-Space as per quote 13.10.20 (value $2,806.00)',
          'Master bedroom – Melamine shelves, full and double hang walk in wardrobe system 1000mm x 1620mm',
          'Bedroom 2 & 3 – Melamine single shelf and pole system 1460mm',
          'Downstairs Linen – Melamine set of four shelves 920mm wide x 370mm deep',
          'Upstairs Linen – Melamine set of four shelves 1420mm wide x 400mm deep',
        ])},
        {id: 22, number: 22, title: 'SKYLIGHTS, ROOFLIGHTS AND SOLARTUBES', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for a Sola Tube, skylight or rooflight',
        ])},
        {id: 23, number: 23, title: 'ROOF ACCESS & ATTIC STORAGE', comment_count: 0, paragraphs: JSON.stringify([
          'Shall be via a minimum size of 800 mm x 800mm access opening in the garage ceiling',
          'Opening shall be trimmed with 60mm x 12mm Single bevelled architrave',
        ])},
        {id: 24, number: 24, title: 'KITCHEN JOINERY', comment_count: 0, paragraphs: JSON.stringify([
          'Kitchen from Trends Kitchens as per quote 29.01.20',
          'Kitchen joinery includes bench top, stainless-steel sink insert and installation (value $15,000.00)',
        ])},
        {id: 25, number: 25, title: 'APPLIANCES', comment_count: 0, paragraphs: JSON.stringify([
          'Oven – F & P Pyrolytic Wall Oven OB60SC7CEPX1',
          'Cooktop ¬– F & P Induction Cooktop CI604CTB1 ',
          'Rangehood ¬– F & P Designer Rangehood HC90DCXB3',
          'Dishwasher – F & P Dishwasher DW60FC6X1',
          'Canopy rangehood to be vented to the exterior through the r',
        ])},
        {id: 26, number: 26, title: 'ELECTRICAL', comment_count: 0, paragraphs: JSON.stringify([
          'Electrical',
        ])},
        {id: 27, number: 27, title: 'BATHROOM', comment_count: 0, paragraphs: JSON.stringify([
          'Bathrooms',
        ])},
        {id: 28, number: 28, title: 'ENSUITE', comment_count: 0, paragraphs: JSON.stringify([
          'Ensuite',
        ])},
        {id: 29, number: 29, title: 'WC', comment_count: 0, paragraphs: JSON.stringify([
          'Water Closet',
        ])},
        {id: 30, number: 30, title: 'LAUNDRY', comment_count: 0, paragraphs: JSON.stringify([
          'Laundry',
        ])},
        {id: 31, number: 31, title: 'KITCHEN', comment_count: 0, paragraphs: JSON.stringify([
          'Kitchen',
        ])},
        {id: 32, number: 32, title: 'PLUMBING', comment_count: 0, paragraphs: JSON.stringify([
          'Shall include the complete internal plumbing of hot and cold water via Fusiotherm pipework',
          'Shall include a 250 litre mains pressure vitreous enamel Rheem hot water cylinder located in the hallway cupboard',
          'Allowance has been made for 3 external hose taps ',
          'Includes pop up wastes to all vanity basins and the bath',
        ])},
        {id: 33, number: 33, title: 'GAS INSTALLATION', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for the installation of any gas appliances',
          'Shall include Rinnai Infinity hot water califont located on the exterior wall of the garage (gas bottles not included)',
        ])},
        {id: 34, number: 34, title: 'SOLAR', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for any solar',
        ])},
        {id: 31, number: 31, title: 'HEATING', comment_count: 0, paragraphs: JSON.stringify([
          'Shall include a high wall Mitsubishi EcoCore MSZ-GL50VGD inverter heatpump',
          'Interior heat pump unit shall be located in the dining room ',
        ])},
        {id: 35, number: 35, title: 'DRAINAGE', comment_count: 0, paragraphs: JSON.stringify([
          'This contract includes a Provisional Sum of $5,750.00 for drainage works',
          'Includes sewer/stormwater drains, sumps and gullys finished to correct council levels. Should your landscaping affect these finished heights then any rectification work required will be at your own cost',
          'All drains, phone, power and water to house. Owners to connect and transfer power and phone account',
        ])},
        {id: 36, number: 36, title: 'FRIDGE WATER SUPPLY', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for a fridge water connection',
        ])},
        {id: 37, number: 37, title: 'MIRRORS', comment_count: 0, paragraphs: JSON.stringify([
          'Shall include a 1200 high x 500 wide polished edge mirror to each of the downstairs and upstairs water closets',
          'Shall include a Broadway mirror fixed above each of the 900 wide vanities',
        ])},
        {id: 38, number: 38, title: 'DECORATING', comment_count: 0, paragraphs: JSON.stringify([
          'Resene paint system to the complete home',
          'Ceilings to be Resene flat ceiling paint ',
          'Interior walls to be Zylone sheen 3 coat system ',
          'All interior wall and ceiling colours to be from a white base',
          'Limited to two wall colours throughout',
          'Dark base colours, feature walls and picking out skirtings is all an extra',
          'Lustacryl semigloss to bathroom & ensuite walls and ceiling’s',
          'Enamel to all interior doors, skirtings, architraves, window & door reveals',
          'Wall colours will extend around into the back edge of all window and door architraves',
          'Includes interior painting of the garage / sealed (if plywood linings)',
          'Exterior painting shall include the soffits, weatherboards and garage door jambs',
          'Downpipes shall be painted',
          'Plaster finish will be painted under the work of the Rockcote Contractor',
        ])},
        {id: 39, number: 39, title: 'COLOR SCHEMES', comment_count: 0, paragraphs: JSON.stringify([
          'Shall include the services of a professional colour consultant at Studio J',
          'Choice of colours for the various products included in this contract will be from the manufacturers standard colour range',
        ])},
        {id: 40, number: 40, title: 'CURTAIN AND BLINDS', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for curtains or blinds',
        ])},
        {id: 41, number: 41, title: 'CARPET', comment_count: 0, paragraphs: JSON.stringify([
          'This contract includes a Prime Cost Sum of $6,400.00 for carpet',
          'All carpets from Hubbers Flooring - Typical carpet rating: Jennian Specification',
          'This contract allows for carpet to be laid to the following areas - Dining, living, hallway, master, bed 2, bed 3, linen and wardrobes',
          'Excludes any garage carpet',
        ])},
        {id: 42, number: 42, title: 'VINYL', comment_count: 0, paragraphs: JSON.stringify([
          'This contract includes a Prime Cost Sum of $1,859.32 for vinyl',
          'All vinyl from Hubbers Flooring - Typical carpet rating: Jennian Specification',
          'This contract allows for vinyl to be laid to the following areas - kitchen, dining, bathroom, toilet, ensuite, laundry and entry',
        ])},
        {id: 43, number: 43, title: 'TILING', comment_count: 0, paragraphs: JSON.stringify([
          'This contract includes a Prime Cost Sum of $920.00 for tiles and waterproofing',
          'All tiles from Hubbers Flooring - Typical carpet rating: Jennian Specification',
          'Tiles to bath apron and bath splash included - Three rows high',
          'The above tiling to the bath splash shall be with 300mm x 100mm white tiles complete with a chrome trim',
          'All tiling shall comply with the best trade practices',
          'Masterbuild guarantee does not cover any tiled areas',
          'No allowance has been made for any surplus tiles to be left on site for future maintenance, as an additional option you may choose to do this, please ask your consultant for a quote' 
        ])},
        {id: 44, number: 44, title: 'DRIVEWAYS & LANDSCAPING', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for any driveways or paving',
          'No allowance has been made for any landscaping', 
        ])},
        {id: 45, number: 45, title: 'DECKS', comment_count: 0, paragraphs: JSON.stringify([
          'No allowance has been made for any form of timber decking',
        ])},
        {id: 46, number: 46, title: 'WARRANTIES', comment_count: 0, paragraphs: JSON.stringify([
          'To ensure that all guarantees and warranties for the product included in this project remain valid, please keep up with the recommended maintenance programme',
        ])},
        {id: 47, number: 47, title: 'MAINTENANCE', comment_count: 0, paragraphs: JSON.stringify([
          'After taking possession the maintenance period will be 3 years',
          '90 days after the possession date, our construction manager will make contact to arrange a home visit.  Prior to this visit if you could take note of any maintenance that may need attending.  ',
          'For any urgent matters please contact our Construction Manager',
          'This maintenance period is non-transferable and only remains valid as long as the owner of the home is the person stated at the top of this schedule of works',
        ])},
        {id: 48, number: 48, title: 'EXCLUSIONS', comment_count: 0, paragraphs: JSON.stringify([
          'Valuation fees',
          'Surveyor’s fees for lost boundary peg locations',
          'Letterbox, clothesline or television aerial',
          'Water rates used during build (to be by owner)',
        ])},
        {id: 49, number: 49, title: 'PRODUCT OPTIONS', comment_count: 0, paragraphs: JSON.stringify([
          'Requested price options, but have not been included in this contract',
        ])},
        {id: 50, number: 50, title: 'SUMMARY OF PROVISIONAL SUMS INCLUDED IN THIS CONTRACT', comment_count: 0, paragraphs: JSON.stringify([
          'Provisional sums are an estimate for portion of work, for example site excavation - for which the extent is not known. Accordingly, the amount of a provisional sum can be, to a large extent, outside of either party’s control',
        ])},
        {id: 51, number: 51, title: 'SUMMARY OF PRIME COST SUMS INCLUDED IN THIS CONTRACT', comment_count: 0, paragraphs: JSON.stringify([
          'Prime cost sums cover the supply cost only for a  specific item; example a bathroom vanity, a PC sum is to be spent at the instruction of the client, meaning they will have some ability to control the final amount',
        ])},
        {id: 52, number: 52, title: 'CONFIRMATION OF PLANS', comment_count: 0, paragraphs: JSON.stringify([
          'Final plans need to be checked carefully, as with the new Building Act alterations cannot be made after the submission of the documents to the council',
          'If an amendment were to be made, no further work at that stage could proceed until it has been approved by the Council',
          'This would affect construction time and possession dates',
          'Clients will incur a fee from not only the Council but Jennian Homes for this amendment',
        ])},
        {id: 53, number: 53, title: 'VARIATIONS TO CONTRACT', comment_count: 0, paragraphs: JSON.stringify([
          'Once the plans are finalised and the Contract has been signed, all changes will be made by a ’Variation to the Contract’.  If there has been a change made after the Contract this will be in a written format and will need to be signed off for the change of works to take place',
          'There will be two copies of the V.O., one for the owner and one to be signed and returned to the Jennian Office',
          'Note:  If you do not have the ‘Variation of the Contract’ signed and returned to the office the current contract will still stand.  A verbal agreement with a member of the Jennian Office will not be considered a ‘Variation to the Contract’',
        ])},
        {id: 54, number: 54, title: 'EXPECTED START & COMPLETION DATES', comment_count: 0, paragraphs: JSON.stringify([
          'Please read the following in reference to ‘Part 3 - Specific Conditions’ No’s  III and IV of the attached Masterbuild Contract',
          'It is a requirement to provide specific dates for expected start and completion dates as part of the contract.  These dates are a guide only and are subject to change',
          'Jennian Homes will do their upmost best to achieve the earliest outcome possible, however it is important to be aware that much of this process is out of our hands, such as the following:',
          'a) Engineering requirements are dealt with from outside our office and processing times can vary depending on their nature',
          'b) Resource Consents can take longer than Building Consents and can hold up the Building consent issue',
          'c) Building Consents can be held up by the Local Territorial Authority in general, for multiple reasons at their own discretion',
          'If a title for a section has not yet been issued at time of Contract, the development of these sections falls under the same scrutiny as mentioned in clause (c)',
          'Jennian Homes would recommend working on a start date within 6 weeks of the Building Consent being applied for, and/or the completion date being within 24 weeks of the actual start date',
        ])},
        {id: 55, number: 55, title: 'CLIENT APPROVAL', comment_count: 0, paragraphs: JSON.stringify([
          '',
        ])},
        {id: 56, number: 56, title: 'VARIATIONS TO CONTRACT', comment_count: 0, paragraphs: JSON.stringify([
          '',
        ])}
      ])
    })
}