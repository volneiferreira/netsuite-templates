/**
 * @NApiVersion 2.x
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 */
define([],
  function () {
    /**
     * Columns to be retrieved in the search.
     *
     * @type {object[]}
     */
    const searchColumns = [{
      name: ''
    }]

    /**
     * Columns to be retrieved in the results.
     *
     * @type {string[]}
     */
    const resultColumns = searchColumns.map(function (c) {
      var column = c.name + (c.join ? '.' + c.join : '')
      if (c.summary) {
        column = c.summary + '(' + column + ')'
      }
      return column
    })

    /**
     * Marks the beginning of the Map/Reduce process and generates input data.
     *
     * @typedef {Object} ObjectRef
     * @property {number} id - Internal ID of the record instance
     * @property {string} type - Record type id
     *
     * @return {Array|Object|Search|RecordRef} inputSummary
     * @since 2015.1
     */
    function getInputData () {

    }

    /**
     * Executes when the map entry point is triggered and applies to each key/value pair.
     *
     * @param {MapSummary} context - Data collection containing the key/value pairs to process through the map stage
     * @since 2015.1
     */
    function map (context) {

    }

    /**
     * Executes when the reduce entry point is triggered and applies to each group.
     *
     * @param {ReduceSummary} context - Data collection containing the groups to process through the reduce stage
     * @since 2015.1
     */
    function reduce (context) {

    }

    /**
     * Executes when the summarize entry point is triggered and applies to the result set.
     *
     * @param {Summary} summary - Holds statistics regarding the execution of a map/reduce script
     * @since 2015.1
     */
    function summarize (summary) {
      const inputSummaryError = summary.inputSummary.error

      if (inputSummaryError) {
        log.error({ title: 'Input Error', details: inputSummaryError })
      }

      summary.mapSummary.errors.iterator().each(function (key, error) {
        log.error({ title: 'Map Error for key: ' + key, details: error })
        return true
      })

      summary.reduceSummary.errors.iterator().each(function (key, error) {
        log.error({ title: 'Reduce Error for key: ' + key, details: error })
        return true
      })
    }

    return {
      getInputData: getInputData,
      map: map,
      reduce: reduce,
      summarize: summarize
    }
  })
