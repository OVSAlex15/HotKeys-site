"use strict";
/**********************************************
 *      DO NOT MODIFY THIS FILE MANUALLY      *
 *                                            *
 *  THIS FILE HAS BEEN COPIED FROM ast-spec.  *
 * ANY CHANGES WILL BE LOST ON THE NEXT BUILD *
 *                                            *
 *   MAKE CHANGES TO ast-spec AND THEN RUN    *
 *                 yarn build                 *
 **********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST_TOKEN_TYPES = exports.AST_NODE_TYPES = void 0;
var AST_NODE_TYPES;
(function (AST_NODE_TYPES) {
    AST_NODE_TYPES["AccessorProperty"] = "AccessorProperty";
    AST_NODE_TYPES["ArrayExpression"] = "ArrayExpression";
    AST_NODE_TYPES["ArrayPattern"] = "ArrayPattern";
    AST_NODE_TYPES["ArrowFunctionExpression"] = "ArrowFunctionExpression";
    AST_NODE_TYPES["AssignmentExpression"] = "AssignmentExpression";
    AST_NODE_TYPES["AssignmentPattern"] = "AssignmentPattern";
    AST_NODE_TYPES["AwaitExpression"] = "AwaitExpression";
    AST_NODE_TYPES["BinaryExpression"] = "BinaryExpression";
    AST_NODE_TYPES["BlockStatement"] = "BlockStatement";
    AST_NODE_TYPES["BreakStatement"] = "BreakStatement";
    AST_NODE_TYPES["CallExpression"] = "CallExpression";
    AST_NODE_TYPES["CatchClause"] = "CatchClause";
    AST_NODE_TYPES["ChainExpression"] = "ChainExpression";
    AST_NODE_TYPES["ClassBody"] = "ClassBody";
    AST_NODE_TYPES["ClassDeclaration"] = "ClassDeclaration";
    AST_NODE_TYPES["ClassExpression"] = "ClassExpression";
    AST_NODE_TYPES["ConditionalExpression"] = "ConditionalExpression";
    AST_NODE_TYPES["ContinueStatement"] = "ContinueStatement";
    AST_NODE_TYPES["DebuggerStatement"] = "DebuggerStatement";
    AST_NODE_TYPES["Decorator"] = "Decorator";
    AST_NODE_TYPES["DoWhileStatement"] = "DoWhileStatement";
    AST_NODE_TYPES["EmptyStatement"] = "EmptyStatement";
    AST_NODE_TYPES["ExportAllDeclaration"] = "ExportAllDeclaration";
    AST_NODE_TYPES["ExportDefaultDeclaration"] = "ExportDefaultDeclaration";
    AST_NODE_TYPES["ExportNamedDeclaration"] = "ExportNamedDeclaration";
    AST_NODE_TYPES["ExportSpecifier"] = "ExportSpecifier";
    AST_NODE_TYPES["ExpressionStatement"] = "ExpressionStatement";
    AST_NODE_TYPES["ForInStatement"] = "ForInStatement";
    AST_NODE_TYPES["ForOfStatement"] = "ForOfStatement";
    AST_NODE_TYPES["ForStatement"] = "ForStatement";
    AST_NODE_TYPES["FunctionDeclaration"] = "FunctionDeclaration";
    AST_NODE_TYPES["FunctionExpression"] = "FunctionExpression";
    AST_NODE_TYPES["Identifier"] = "Identifier";
    AST_NODE_TYPES["IfStatement"] = "IfStatement";
    AST_NODE_TYPES["ImportAttribute"] = "ImportAttribute";
    AST_NODE_TYPES["ImportDeclaration"] = "ImportDeclaration";
    AST_NODE_TYPES["ImportDefaultSpecifier"] = "ImportDefaultSpecifier";
    AST_NODE_TYPES["ImportExpression"] = "ImportExpression";
    AST_NODE_TYPES["ImportNamespaceSpecifier"] = "ImportNamespaceSpecifier";
    AST_NODE_TYPES["ImportSpecifier"] = "ImportSpecifier";
    AST_NODE_TYPES["JSXAttribute"] = "JSXAttribute";
    AST_NODE_TYPES["JSXClosingElement"] = "JSXClosingElement";
    AST_NODE_TYPES["JSXClosingFragment"] = "JSXClosingFragment";
    AST_NODE_TYPES["JSXElement"] = "JSXElement";
    AST_NODE_TYPES["JSXEmptyExpression"] = "JSXEmptyExpression";
    AST_NODE_TYPES["JSXExpressionContainer"] = "JSXExpressionContainer";
    AST_NODE_TYPES["JSXFragment"] = "JSXFragment";
    AST_NODE_TYPES["JSXIdentifier"] = "JSXIdentifier";
    AST_NODE_TYPES["JSXMemberExpression"] = "JSXMemberExpression";
    AST_NODE_TYPES["JSXNamespacedName"] = "JSXNamespacedName";
    AST_NODE_TYPES["JSXOpeningElement"] = "JSXOpeningElement";
    AST_NODE_TYPES["JSXOpeningFragment"] = "JSXOpeningFragment";
    AST_NODE_TYPES["JSXSpreadAttribute"] = "JSXSpreadAttribute";
    AST_NODE_TYPES["JSXSpreadChild"] = "JSXSpreadChild";
    AST_NODE_TYPES["JSXText"] = "JSXText";
    AST_NODE_TYPES["LabeledStatement"] = "LabeledStatement";
    AST_NODE_TYPES["Literal"] = "Literal";
    AST_NODE_TYPES["LogicalExpression"] = "LogicalExpression";
    AST_NODE_TYPES["MemberExpression"] = "MemberExpression";
    AST_NODE_TYPES["MetaProperty"] = "MetaProperty";
    AST_NODE_TYPES["MethodDefinition"] = "MethodDefinition";
    AST_NODE_TYPES["NewExpression"] = "NewExpression";
    AST_NODE_TYPES["ObjectExpression"] = "ObjectExpression";
    AST_NODE_TYPES["ObjectPattern"] = "ObjectPattern";
    AST_NODE_TYPES["PrivateIdentifier"] = "PrivateIdentifier";
    AST_NODE_TYPES["Program"] = "Program";
    AST_NODE_TYPES["Property"] = "Property";
    AST_NODE_TYPES["PropertyDefinition"] = "PropertyDefinition";
    AST_NODE_TYPES["RestElement"] = "RestElement";
    AST_NODE_TYPES["ReturnStatement"] = "ReturnStatement";
    AST_NODE_TYPES["SequenceExpression"] = "SequenceExpression";
    AST_NODE_TYPES["SpreadElement"] = "SpreadElement";
    AST_NODE_TYPES["StaticBlock"] = "StaticBlock";
    AST_NODE_TYPES["Super"] = "Super";
    AST_NODE_TYPES["SwitchCase"] = "SwitchCase";
    AST_NODE_TYPES["SwitchStatement"] = "SwitchStatement";
    AST_NODE_TYPES["TaggedTemplateExpression"] = "TaggedTemplateExpression";
    AST_NODE_TYPES["TemplateElement"] = "TemplateElement";
    AST_NODE_TYPES["TemplateLiteral"] = "TemplateLiteral";
    AST_NODE_TYPES["ThisExpression"] = "ThisExpression";
    AST_NODE_TYPES["ThrowStatement"] = "ThrowStatement";
    AST_NODE_TYPES["TryStatement"] = "TryStatement";
    AST_NODE_TYPES["UnaryExpression"] = "UnaryExpression";
    AST_NODE_TYPES["UpdateExpression"] = "UpdateExpression";
    AST_NODE_TYPES["VariableDeclaration"] = "VariableDeclaration";
    AST_NODE_TYPES["VariableDeclarator"] = "VariableDeclarator";
    AST_NODE_TYPES["WhileStatement"] = "WhileStatement";
    AST_NODE_TYPES["WithStatement"] = "WithStatement";
    AST_NODE_TYPES["YieldExpression"] = "YieldExpression";
    AST_NODE_TYPES["TSAbstractAccessorProperty"] = "TSAbstractAccessorProperty";
    AST_NODE_TYPES["TSAbstractKeyword"] = "TSAbstractKeyword";
    AST_NODE_TYPES["TSAbstractMethodDefinition"] = "TSAbstractMethodDefinition";
    AST_NODE_TYPES["TSAbstractPropertyDefinition"] = "TSAbstractPropertyDefinition";
    AST_NODE_TYPES["TSAnyKeyword"] = "TSAnyKeyword";
    AST_NODE_TYPES["TSArrayType"] = "TSArrayType";
    AST_NODE_TYPES["TSAsExpression"] = "TSAsExpression";
    AST_NODE_TYPES["TSAsyncKeyword"] = "TSAsyncKeyword";
    AST_NODE_TYPES["TSBigIntKeyword"] = "TSBigIntKeyword";
    AST_NODE_TYPES["TSBooleanKeyword"] = "TSBooleanKeyword";
    AST_NODE_TYPES["TSCallSignatureDeclaration"] = "TSCallSignatureDeclaration";
    AST_NODE_TYPES["TSClassImplements"] = "TSClassImplements";
    AST_NODE_TYPES["TSConditionalType"] = "TSConditionalType";
    AST_NODE_TYPES["TSConstructorType"] = "TSConstructorType";
    AST_NODE_TYPES["TSConstructSignatureDeclaration"] = "TSConstructSignatureDeclaration";
    AST_NODE_TYPES["TSDeclareFunction"] = "TSDeclareFunction";
    AST_NODE_TYPES["TSDeclareKeyword"] = "TSDeclareKeyword";
    AST_NODE_TYPES["TSEmptyBodyFunctionExpression"] = "TSEmptyBodyFunctionExpression";
    AST_NODE_TYPES["TSEnumBody"] = "TSEnumBody";
    AST_NODE_TYPES["TSEnumDeclaration"] = "TSEnumDeclaration";
    AST_NODE_TYPES["TSEnumMember"] = "TSEnumMember";
    AST_NODE_TYPES["TSExportAssignment"] = "TSExportAssignment";
    AST_NODE_TYPES["TSExportKeyword"] = "TSExportKeyword";
    AST_NODE_TYPES["TSExternalModuleReference"] = "TSExternalModuleReference";
    AST_NODE_TYPES["TSFunctionType"] = "TSFunctionType";
    AST_NODE_TYPES["TSImportEqualsDeclaration"] = "TSImportEqualsDeclaration";
    AST_NODE_TYPES["TSImportType"] = "TSImportType";
    AST_NODE_TYPES["TSIndexedAccessType"] = "TSIndexedAccessType";
    AST_NODE_TYPES["TSIndexSignature"] = "TSIndexSignature";
    AST_NODE_TYPES["TSInferType"] = "TSInferType";
    AST_NODE_TYPES["TSInstantiationExpression"] = "TSInstantiationExpression";
    AST_NODE_TYPES["TSInterfaceBody"] = "TSInterfaceBody";
    AST_NODE_TYPES["TSInterfaceDeclaration"] = "TSInterfaceDeclaration";
    AST_NODE_TYPES["TSInterfaceHeritage"] = "TSInterfaceHeritage";
    AST_NODE_TYPES["TSIntersectionType"] = "TSIntersectionType";
    AST_NODE_TYPES["TSIntrinsicKeyword"] = "TSIntrinsicKeyword";
    AST_NODE_TYPES["TSLiteralType"] = "TSLiteralType";
    AST_NODE_TYPES["TSMappedType"] = "TSMappedType";
    AST_NODE_TYPES["TSMethodSignature"] = "TSMethodSignature";
    AST_NODE_TYPES["TSModuleBlock"] = "TSModuleBlock";
    AST_NODE_TYPES["TSModuleDeclaration"] = "TSModuleDeclaration";
    AST_NODE_TYPES["TSNamedTupleMember"] = "TSNamedTupleMember";
    AST_NODE_TYPES["TSNamespaceExportDeclaration"] = "TSNamespaceExportDeclaration";
    AST_NODE_TYPES["TSNeverKeyword"] = "TSNeverKeyword";
    AST_NODE_TYPES["TSNonNullExpression"] = "TSNonNullExpression";
    AST_NODE_TYPES["TSNullKeyword"] = "TSNullKeyword";
    AST_NODE_TYPES["TSNumberKeyword"] = "TSNumberKeyword";
    AST_NODE_TYPES["TSObjectKeyword"] = "TSObjectKeyword";
    AST_NODE_TYPES["TSOptionalType"] = "TSOptionalType";
    AST_NODE_TYPES["TSParameterProperty"] = "TSParameterProperty";
    AST_NODE_TYPES["TSPrivateKeyword"] = "TSPrivateKeyword";
    AST_NODE_TYPES["TSPropertySignature"] = "TSPropertySignature";
    AST_NODE_TYPES["TSProtectedKeyword"] = "TSProtectedKeyword";
    AST_NODE_TYPES["TSPublicKeyword"] = "TSPublicKeyword";
    AST_NODE_TYPES["TSQualifiedName"] = "TSQualifiedName";
    AST_NODE_TYPES["TSReadonlyKeyword"] = "TSReadonlyKeyword";
    AST_NODE_TYPES["TSRestType"] = "TSRestType";
    AST_NODE_TYPES["TSSatisfiesExpression"] = "TSSatisfiesExpression";
    AST_NODE_TYPES["TSStaticKeyword"] = "TSStaticKeyword";
    AST_NODE_TYPES["TSStringKeyword"] = "TSStringKeyword";
    AST_NODE_TYPES["TSSymbolKeyword"] = "TSSymbolKeyword";
    AST_NODE_TYPES["TSTemplateLiteralType"] = "TSTemplateLiteralType";
    AST_NODE_TYPES["TSThisType"] = "TSThisType";
    AST_NODE_TYPES["TSTupleType"] = "TSTupleType";
    AST_NODE_TYPES["TSTypeAliasDeclaration"] = "TSTypeAliasDeclaration";
    AST_NODE_TYPES["TSTypeAnnotation"] = "TSTypeAnnotation";
    AST_NODE_TYPES["TSTypeAssertion"] = "TSTypeAssertion";
    AST_NODE_TYPES["TSTypeLiteral"] = "TSTypeLiteral";
    AST_NODE_TYPES["TSTypeOperator"] = "TSTypeOperator";
    AST_NODE_TYPES["TSTypeParameter"] = "TSTypeParameter";
    AST_NODE_TYPES["TSTypeParameterDeclaration"] = "TSTypeParameterDeclaration";
    AST_NODE_TYPES["TSTypeParameterInstantiation"] = "TSTypeParameterInstantiation";
    AST_NODE_TYPES["TSTypePredicate"] = "TSTypePredicate";
    AST_NODE_TYPES["TSTypeQuery"] = "TSTypeQuery";
    AST_NODE_TYPES["TSTypeReference"] = "TSTypeReference";
    AST_NODE_TYPES["TSUndefinedKeyword"] = "TSUndefinedKeyword";
    AST_NODE_TYPES["TSUnionType"] = "TSUnionType";
    AST_NODE_TYPES["TSUnknownKeyword"] = "TSUnknownKeyword";
    AST_NODE_TYPES["TSVoidKeyword"] = "TSVoidKeyword";
})(AST_NODE_TYPES || (exports.AST_NODE_TYPES = AST_NODE_TYPES = {}));
var AST_TOKEN_TYPES;
(function (AST_TOKEN_TYPES) {
    AST_TOKEN_TYPES["Boolean"] = "Boolean";
    AST_TOKEN_TYPES["Identifier"] = "Identifier";
    AST_TOKEN_TYPES["JSXIdentifier"] = "JSXIdentifier";
    AST_TOKEN_TYPES["JSXText"] = "JSXText";
    AST_TOKEN_TYPES["Keyword"] = "Keyword";
    AST_TOKEN_TYPES["Null"] = "Null";
    AST_TOKEN_TYPES["Numeric"] = "Numeric";
    AST_TOKEN_TYPES["Punctuator"] = "Punctuator";
    AST_TOKEN_TYPES["RegularExpression"] = "RegularExpression";
    AST_TOKEN_TYPES["String"] = "String";
    AST_TOKEN_TYPES["Template"] = "Template";
    AST_TOKEN_TYPES["Block"] = "Block";
    AST_TOKEN_TYPES["Line"] = "Line";
})(AST_TOKEN_TYPES || (exports.AST_TOKEN_TYPES = AST_TOKEN_TYPES = {}));
