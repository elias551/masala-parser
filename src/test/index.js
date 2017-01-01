/*
 * Parsec
 * https://github.com/d-plaindoux/parsec
 *
 * Copyright (c) 2016 Didier Plaindoux
 * Licensed under the LGPL2 license.
 */

import optionTest from './data/option_test';
import tryTest from './data/try_test';
import streamsTest from './stream/stream_test';
import bufferedStreamsTest from './stream/buffered_stream_test';
import genlexTest from './genlex/genlex_test';
import tokenTest from './genlex/token_test';
import tokenizerTest from './genlex/tokenizer_test';
import lineTest from './standard/_line-parser-test';
import markdownTest from './standard/_markdown_test';
import jsonParseTest from './standard/_jsonparser_test'
import jsonSampleTest from './standard/_jsonsample_test';
import parserChainTest from './parsec/parser_chain_test';
import parserCoreTest from './parsec/parser_core_test';
import parserCoreDefaultTest from './parsec/parser_core_default_test';
import parserExtensionTest from './parsec/parser_extensions_test';
import parserStreamTest from './parsec/parser_stream_test';
import parserResponseTest from './parsec/response_test';

export {
    optionTest, tryTest, streamsTest, bufferedStreamsTest,
    genlexTest, tokenTest, tokenizerTest,
    jsonParseTest, lineTest, markdownTest,jsonSampleTest,
    parserChainTest, parserCoreTest, parserCoreDefaultTest, parserExtensionTest,
    parserStreamTest, parserResponseTest
}
 
